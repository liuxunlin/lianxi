import React from 'react';
import Drawer from '@/components/common/Drawer'
import Banner from '@/components/common/Banner';
import ProList from '@/components/common/ProList';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: [],
      bannerlist: [1],
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      this.setState({bannerlist:data})
    })
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        prolist: data
      })
    })
  }
  render () {
    return (
      <div className = "box">
         {/* <header className = "header">首页头部</header> }  */}
         <Drawer />
        <div className = "content"> 
        <Banner bannerlist = { this.state.bannerlist }/>
        <ProList prolist = { this.state.prolist } { ...this.props }/>
        </div>
      </div>
    )
  }
}

export default Com;
