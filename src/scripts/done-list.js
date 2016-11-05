const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');
const $ = require('jquery')

const DoneList = React.createClass({

   _homePage: function(){
      window.location.hash=''
   },



      render: function(){

         return(
            <div className='todoListMain'>
                     <h3 className ="header">Completed List</h3>
                  <div className="row">
                     <div className="col-md-6 col-md-offset-3 input-div">
                        <p></p>
                     </div>
                     <button className="btn primary" onClick={this._homePage}>Go Home</button>

                  </div>

               </div>
               )
            }


})
module.exports = DoneList
