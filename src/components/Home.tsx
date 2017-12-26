import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Home = (props) => (
    <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
    </div>
)

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(
    null,
    mapDispatchToProps,
)(Home)
