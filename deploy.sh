#!/usr/bin/env bash

set -e
set -u
set -o pipefail

# more bash-friendly output for jq
JQ="jq --raw-output --exit-status"

deploy_image() {

    docker login -u $DOCKER_USERNAME -p $DOCKER_PASS -e $DOCKER_EMAIL
    docker tag app rusinkabohdan/kudypoditys:$CIRCLE_SHA1
    docker push rusinkabohdan/kudypoditys:$CIRCLE_SHA1 | cat # workaround progress weirdness

}

# reads $CIRCLE_SHA1, $host_port
# sets $task_def
make_task_def() {

    task_template='[
	{
	    "name": "kudypoditys",
	    "image": "rusinkabohdan/kudypoditys:%s",
	    "essential": true,
	    "memory": 200,
	    "cpu": 10
	},
	{
	    "name": "nginx",
	    "links": [
		"kudypoditys"
	    ],
	    "image": "bellkev/nginx-base:stable",
	    "portMappings": [
		{
		    "containerPort": 8000,
		    "hostPort": %s
		}
	    ],
	    "cpu": 10,
	    "memory": 200,
	    "essential": true
	}
    ]'

    task_def=$(printf "$task_template" $CIRCLE_SHA1 $host_port)

}

# reads $family
# sets $revision
register_definition() {

    if revision=$(aws ecs register-task-definition --container-definitions "$task_def" --family $family | $JQ '.taskDefinition.taskDefinitionArn'); then
        echo "Revision: $revision"
    else
        echo "Failed to register task definition"
        return 1
    fi

}

deploy_cluster() {

    host_port=80
    family="kudypoditys-final-task"
    cluster="BSAcluster"
    service="kudypoditys"

    make_task_def
    register_definition

    if [[ $(aws ecs update-service --cluster $cluster --service $service --task-definition $revision | \
                   $JQ '.service.taskDefinition') != $revision ]]; then
        echo "Error updating service."
        return 1
    fi

    # wait for older revisions to disappear
    # not really necessary, but nice for demos

    echo "Deployed!"
    return 0

}

deploy_image
deploy_cluster