import React from 'react';

const ProgressBar = (props) => {
    const { total, target, percentage } = props
    return (
        <>
            <h2 className='mb-4'>
                Raised ${total} of <span className='text-muted'>${target}</span>
            </h2>
            <div className="progress">
                <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: percentage }}
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100">{percentage} </div>
            </div>
        </>
    )
}

export default ProgressBar;