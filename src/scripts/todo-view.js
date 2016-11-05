const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');
const $ = require('jquery')


const ToDoListModel = Backbone.Model.extend({})


const ToDoView = React.createClass({
   getInitialState: function(){
      let newListModel = new ToDoListModel()
      let newListModel2 = new ToDoListModel()

      let listProperties = {
         list: "Take Out the Garbage",
         checked: false
      }
      let listProperties2 = {
         list: "Wash the Dishes",
         checked: false
      }

      newListModel.set(listProperties)
      newListModel2.set(listProperties2)

      let listModelArray = []
      listModelArray.push(newListModel)
      listModelArray.push(newListModel2)

      this.listStateObj = {
         taskListData: listModelArray
      }
      return this.listStateObj
   },

   _doneSubmit: function(){
      window.location.hash='#done'
   },
   _undoneSubmit: function(){
      window.location.hash='#undone'
   },
   _deleleSubmit: function(){
      const checkedBoxEl = Array.from(document.querySelectorAll(".check-box"))
      //console.log('test', checkedBoxEl);

      checkedBoxEl.forEach(function(objVal, i){
         //console.log(objVal)
         if(objVal.checked === true){
            var listItem = objVal.parentNode.parentNode;
            listItem.parentNode.removeChild(listItem)

            //console.log('is checked')
         }else {
            //console.log('not checked')
         }
      })
   },

   _handleSubmit: function(evt){
      evt.preventDefault()
     //console.log (this.refs.listInputEl.value)
      let theList = this.refs.listInputEl.value
      let newList = new ToDoListModel()
      newList.set({
         list: theList
      })

      let copyList = this.state.taskListData.map(function(listData){

         return listData;
      })

      copyList.push(newList)

      let newListObj = {
         taskListData: copyList
      }
      this.setState(newListObj)
   },

   _toggleChecked: function(){
      //console.log('toggling', this);

   },
   render: function(){
      console.log(this.state.taskListData)
      return (
         <div className='todoListMain'>
                  <h3 className ="header">Weekly TODO List</h3>
               <div className="row">
                  <div className="col-md-6 col-md-offset-3 input-div">
                     <form>
                        <input className="form-control" ref="listInputEl" placeholder="Enter Task"></input>
                        <button className="btn primary" onClick={this._handleSubmit}>Add to List</button>
                     </form>
                  </div>
                  <CreateListArray itemListData={this.state.taskListData}/>
               </div>
                  <button className="btn primary" onClick={this._deleleSubmit}>Remove from List</button>
                  <button className="btn primary" onClick={this._doneSubmit}>Completed Task</button>
                  <button className="btn primary" onClick={this._undoneSubmit}>Save Task for Later</button>

            </div>
            )
         }
      })
   const CreateListArray = React.createClass({
      render: function(){
            let self = this
            let copyListArray = this.props.itemListData.map(function(modl, i){
               // console.log(modl)
               return (
                  <ListData listModelEl ={modl} key={i} />
               )
            })
            //console.log(copyListArray)
            return (
               <div>
                  {copyListArray}
               </div>
               )
            }
         })
   const ListData = React.createClass({
      render: function(){
         //console.log(this.props.listModelEl)

            return (
                  <div className="checkbox">
                  <p>
                  {this.props.listModelEl.get('list')}
                  {<input type='checkbox' className="check-box" />}
                  </p>
                  </div>
                  )
               }
            })


module.exports = ToDoView
