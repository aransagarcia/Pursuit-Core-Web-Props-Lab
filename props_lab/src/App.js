import React from 'react';
import './App.css';
import DonationForm from './Components/DonationForm'
import RecentDonations from './Components/RecentDonations'
import ProgressBar from './Components/ProgressBar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      raised: 0,
      donorName: " ",
      caption: " ",
      donation: 0,
      targert: 5000,
      recentDonation: [],
      targert: 5000,
    }
  }

  handleOnChangeName = (event) => {
    event.preventDefault();
    const value = event.target.value
    this.setState({
      donorName: value
    })
  }

  handleOnChangeCaption = (event) => {
    event.preventDefault();
    const value = event.target.value
    this.setState({
      caption: value
    })
  }


  handleOnChangeRange = (event) => {
    event.preventDefault();
    const value = parseInt(event.target.value)
    this.setState({
      donation: value
    })
  }

  componentDidUpdate() {
    console.log(this.state)
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { donorName, caption, donation, recentDonation } = this.state;
    recentDonation.push({ donorName, caption, donation })
    this.setState({
      donorName: " ",
      caption: " ",
      donation: 5,
      recentDonation: recentDonation
    })
  }

  handleProgressBar = () => {
    const { recentDonation, target } = this.state;
    let total = 0;
    let percentage = 0;
    for (let i = 0; i < recentDonation.length; i++) {
      total += recentDonation[i].donation
    }
    percentage = ((total / target) * 100);
    return (total, percentage)
  }



  render() {
    const { total, percentage } = this.handleProgressBar();
    return (
      <>
        <section className="jumbotron text-center">
          <h1 className="jumbotron-heading">Go Fund Mo</h1>
          <p className="lead text-muted">Help me go on a vacation to a beach somewhere</p>
        </section>
        <div className='container'>

          <div className='row'>
            <ul className="col-4 list-unstyled recent-donations">
              <h5 className='my-4'>Recent Donations</h5>

              {this.state.recentDonation.map((donor, i) => {
                return (
                  <DonationForm
                    donorName={donor.donorName}
                    caption={donor.caption}
                    donation={donor.donation}
                    key={i}
                  />
                )
              })
              }
            </ul>


            <div className='col-8'>

              <ProgressBar
                total={total}
                percentage={percentage}
                target={target.this.state}
              />

              <hr />


              < DonationForm
                name={this.state.donorName}
                caption={this.state.caption}
                donation={this.state.donation}
                handleOnChangeName={this.handleOnChangeName}
                handleOnChangeCaption={this.handleOnChangeCaption}
                handleOnChangeRange={this.handleOnChangeRange}
                handleOnSubmit={this.handleOnSubmit}


              />

            </div>

          </div>
        </div>
      </>

    )
  };
}




// function App() {
//   return (
//     <div className="App">
//  <DonationForm/>
//     </div>
//   );
// }

export default App;
