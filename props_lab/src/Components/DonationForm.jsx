import React from 'react'

const Donationform = (props) => {
    let name = props.donorName
    let caption = props.captions
    let donation = props.donation
    return (
        <form onSubmit={props.handleOnSubmit}>
            <div className="form-group">
                <label>Name</label>

                <input type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="John Doe"
                    onChange={props.handleOnChangeName}
                    value={name} />
            </div>
            <div className="form-group">
                <label>Caption</label>

                <input
                    type="text"
                    className="form-control"
                    id="captionInput" 
                    placeholder="..."
                    onChange={props.handleOnChangeCaption}
                    value={caption} />
            </div>
            <div className="form-group">
                <label>Amount to Donate</label>
                <input type="range"
                    className="custom-range"
                    id="amountInput"
                    min="5"
                    max="1000" 
                    onChange={props.handleOnChangeRange}
                    value = {donation}/>

                <blockquote className="blockquote text-right">
                    <p className="h3 mb-0">$ {donation}</p>
                    <button type="submit" className="btn btn-lg btn-success my-4" 
                    >Donate</button>
                </blockquote>
            </div>
        </form>
    )
}




export default Donationform;


