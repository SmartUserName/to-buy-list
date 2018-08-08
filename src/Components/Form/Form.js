import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
      super(props);

      this.state = {
          item: '',
          itemError: '',
          itemPlaceholder: 'Short item name',
          type: '-',
          typeError : '',
          quantity: 1,
          quantityError: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.validate = this.validate.bind(this);
      this.clearState = this.clearState.bind(this);

  }

    validate(){
        const{ item, type, quantity } = this.state;
        let isError = false;

        if(item.length <= 0 || item.length > 15){
            isError = true;
            this.setState({
                itemError: 'Form-Error'
            })
        }

        if(type === '-'){
            isError = true;
            this.setState({
                typeError: 'Form-Error'
            })
        }

        if(quantity <= 0){
            isError = true;
            this.setState({
                quantityError: 'Form-Error'
            })
        }

        return isError;
    }

    clearState(){
        this.setState({
            item: '',
            itemError: '',
            itemPlaceholder: 'Short item name',
            type: '-',
            typeError : '',
            quantity: 1,
            quantityError: '',
        })
    }

    handleSubmit(e){
        const { item, type, quantity } = this.state;
        const { updateList } = this.props;
        const newItem = { item, type, quantity };
        const err = this.validate();

        e.preventDefault();

        if(!err){
            updateList(newItem);
            this.clearState();
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name + "Error"]: '',
        });
    
    }



  render(){
      const { item, type, quantity, itemError, typeError, quantityError, itemPlaceholder } = this.state;
      return(
          <form onSubmit={this.handleSubmit}>
              <input placeholder={itemPlaceholder}  type={"text"} className={itemError} onChange={this.handleChange} value={item} name={"item"} />
              <select  name={"type"} className={typeError} value={type} onChange={this.handleChange} >
                  <option value={"-"}>{null}</option>
                  <option value={"Beverages"}>Beverages</option>
                  <option value={"Dairy"}>Dairy</option>
                  <option value={"Desserts"}>Desserts</option>
                  <option value={"Detergents"}>Detergents</option>
                  <option value={"Fruits"}>Fruits</option>
                  <option value={"Meat"}>Meat</option>
                  <option value={"Snacks"}>Snacks</option>
                  <option value={"Toiletries"}>Toiletries</option>
                  <option value={"Vegetables"}>Vegetables</option>
                  <option value={"Other"}>Other</option>
              </select>
              <input type={"number"} value={quantity} name={"quantity"} className={quantityError} id={"input-quantity"} onChange={this.handleChange}  />
              <button className={"button"} >Add</button>
          </form>

      )
  }
}

export default Form;