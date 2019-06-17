import React from 'react';
import { Carousel } from 'antd-mobile';

const Com = ({ bannerlist }) => (
  <Carousel
  className="my-carousel"
      autoplay
      infinite
  >
    {bannerlist.map((val, index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%'}}>
              <img
                src={`http://www.daxunxun.com` + val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </a>
          ))}
  </Carousel>
)

export default Com;