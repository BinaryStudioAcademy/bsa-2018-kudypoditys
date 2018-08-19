import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';
import DrawFilters from './boxes.jsx';

class Quickfilter extends React.Component {
    handleItemClick(box) {
        this.props.selectFilter(box);
    }

    sortByType(type) {
        return this.props.boxes.filter(function (obj) {
            return obj.type === type;
        });
    }

    render() {
        // const PropertyType = this.sortByType('Property Type');
        // const Facility = this.sortByType('Facility');
        // const ReviewScore = this.sortByType('Review Score');

        // const list1 = this.drawBoxes(PropertyType);
        // const list2 = this.drawBoxes(Facility);
        // const list3 = this.drawBoxes(ReviewScore);

        return (
            <div className="box">
                <div className="box_header">
                    <h2>Filter by</h2>
                </div>
                <DrawFilters onchange = {this.handleItemClick.bind(this)}/>
                {/* <p className='box_group'>Property Type</p>
                {list1}
                <p className="box_group">Facility</p>
                {list2}
                <p className='box_group'>Review Score</p>
                {list3} */}
            </div>
        );
    }
}
    // Quickfilter.propTypes = {
    //     boxes: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             id: PropTypes.string,
    //             ischecked: PropTypes.boolean,
    //             label:PropTypes.string,
    //             amount: PropTypes.oneOfType([PropTypes.number],[PropTypes.string]),
    //             type: PropTypes.string
    //         })
    //     ),
    //     OnQuickFilterChange: PropTypes.func
    // }

    // export default connect(mapStateToProps, mapDispatchToProps)(Quickfilter);

    export default Quickfilter;

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Quickfilter);
