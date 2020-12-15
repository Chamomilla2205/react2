import React, {Component} from 'react';

class AllUsers extends Component {

    render() {
        let {item} = this.props;
        return (
            <div>
            ID: {item.id} - NAME: {item.name} - AGE: {item.age} - STATUS: {item.status} - CITY: {item.address.city} - STREET: {item.address.street} - NUMBER: {item.address.number}
            </div>
        );
    }
}

export default AllUsers;