import React,{ Component }from 'react';
import { getProducts } from './../../services/axiosServices';
import './../../styles/allProductsView.css';
import { Link } from 'react-router-dom';
import IndividualProduct from './../IndividualProduct/IndividualProduct';



export default class ProductsByCategory extends Component {
  constructor(props) {
    super(props);

    this.state={
      products: []
    }

  }

componentDidMount() {
  console.log("COMPONENT MOUNTED")

  getProducts(this.props.match.params.gender, this.props.match.params.category).then(products => {
    this.setState({products});
    console.log(this.state.products)
  });
}


  render() {

    const allProducts = this.state.products.map( (product, index, arr) => {
      return (
        <IndividualProduct key={product.product_id} id={product.product_id} product={product} />
      )
    } )

    return (
      <div className="contentContainer">
        <div className="breadCrumbs">
          <p><Link to="/">HOME</Link></p>
          <p>/</p>
          <p><Link to={`/${this.props.match.params.gender}`}>{this.props.match.params.gender.toUpperCase()}</Link></p>
          <h3>/ /</h3>
          <h3 className="currPage">{this.props.match.params.category.toUpperCase()}</h3>
        </div>
        <div className="productsLayout">
        {allProducts}
        </div>
      </div>
    )
  }

}

// <p><Link to={`/mens/${product_id}`}>{"MEN'S"}</Link></p>

// getProducts(this.props.match.params.gender, this.props.match.params.category, 5).then(products => {
//   console.log("WORKING!!!");
//   this.setState({products});
//   console.log(this.state.products)
// });
// }