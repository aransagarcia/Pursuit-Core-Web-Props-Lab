import React from 'react';
import './App.css';
// import DonationForm from './Components/DonationForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      raised: 0,
      name: " ",
      caption: " ",
      donation: 0,
      recentDonation: []
    }
  }
  render() {
    return (
      <>
        <section class="jumbotron text-center">
          <h1 class="jumbotron-heading">Go Fund Mo</h1>
          <p class="lead text-muted">Help me go on a vacation to a beach somewhere</p>
        </section>
        <div class='container'>
          <div class='row'>

            <ul class="col-4 list-unstyled recent-donations">
              <h5 class='my-4'>Recent Donations</h5>

              <li class="media my-2">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">John donated $ 50</h5>
                  Let's all give to this great cause!
        </div>
              </li>
              <li class="media my-2">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">John donated $ 50</h5>
                  Let's all give to this great cause!
        </div>
              </li>
              <li class="media my-2">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">John donated $ 50</h5>
                  Let's all give to this great cause!
        </div>
              </li>
            </ul>


            <div class='col-8'>

              <h2 class='mb-4'>Raised $ 300 of <span class='text-muted'>$ 5000</span></h2>
              <div class="progress">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{width: 25}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">25%</div>
              </div>
              <hr />


              <form>
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control" id="nameInput" placeholder="John Doe" />
                </div>
                <div class="form-group">
                  <label>Caption</label>
                  <input type="text" class="form-control" id="captionInput" placeholder="..." />
                </div>
                <div class="form-group">
                  <label>Amount to Donate</label>
                  <input type="range" class="custom-range" id="amountInput" min="5" max="1000" />
                  <blockquote class="blockquote text-right">
                    <p class="h3 mb-0">$ 5</p>
                    <button type="button" class="btn btn-lg btn-success my-4">Donate</button>
                  </blockquote>
                </div>
              </form>

            </div>

          </div>
        </div>
      </>
    )
  }

}


// function App() {
//   return (
//     <div className="App">
//  <DonationForm/>
//     </div>
//   );
// }

export default App;
