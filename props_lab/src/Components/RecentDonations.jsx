import React from 'react'


const RecentDonations = (props) => {
    const { donorName, caption, donation } = props;
    return (
        <li className="media my-2">
            <div className="media-body">
                <h5 className="mt-0 mb-1">{donorName} donated $ {donation}</h5>
                {caption}
            </div>
        </li>
    );
}

export default RecentDonations;