
const filters = [
    {
        name:'Facility',
            children:[
                {id:'1', ischecked: true, label:'Pool', amount: 321,type:'Facility'},
                {id:'2', ischecked: true, label:'Cafe', amount: 111,type:'Facility'},
                {id:'3', ischecked: true, label:'Tennis', amount: 543,type:'Facility'}
            ]
    },
    {
        name:'Property Type',
            children:[
                {id:'4', ischecked: false, label:'Hotel', amount: 324, type:'Property Type'},
                {id:'5', ischecked: false, label:'Hostel', amount: 126, type:'Property Type'}
            ]
    },
    {
        name:'Review Score',
            children:[
                {id:'6', ischecked: false, label:'Excelent location: 9+', amount: 53, type:'Review Score'},
                {id:'7', ischecked: false, label:'Very good location: 8+', amount: 123, type:'Review Score'},
                {id:'8', ischecked: false, label:'Good location: 7+', amount: 765, type:'Review Score'},
            ]
    }


]
export default filters;