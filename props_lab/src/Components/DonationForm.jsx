import React from 'react'

class DonationForm extends React.Component {
    render() {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <h2>Donation Form</h2>
         <input
         type='text'
         placeholder='name'/>
        
         <input
         type='text'
        placeholder='caption'/>
          <button>Donate </button>
        </form>
      );
    }
  
    handleFormSubmit = (event) => {
      event.preventDefault();
      alert("Form submitted!");
    };
  }
  
  export default DonationForm;