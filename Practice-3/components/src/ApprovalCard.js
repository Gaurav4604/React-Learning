import React from 'react'

function ApprovalCard(props) {
    return (
        <div className='ui card' style={
            {
                marginTop: '1rem'
            }
        }>
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard;
