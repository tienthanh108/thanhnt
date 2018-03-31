import React from 'react'
import classes from './ContactUs.scss'
import MapGoogle from '../../../components/MapGoogle/MapGoogle'

class ContactUs extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
  }

  render() {
    const defaultCenter = { lat: 21.027764, lng: 105.834160 }
    const position = { lat: 21.027764, lng: 105.834160 }
    // const googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
    const googleMapURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBB5nGkjTb-Uah24vi4Nb2xyFcipIiBX-E' +
      '&v=3.exp&libraries=geometry,drawing,places'
    return (
      <div className={classes.container}>
        <div className={classes.contentInside}>
          <div className={classes.title}>
            CONTACT US
          </div>
          <div className={classes.content}>
            <table>
              <tbody>
                <tr>
                  <td><span className={classes.subTitle}>Guangzhou Rui Gao Electronics Co., Ltd.</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Service hotline</td>
                  <td>400-996-6488</td>
                </tr>
                <tr>
                  <td>
                    Customer Service Email</td>
                  <td>abc@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    Tel</td>
                  <td>020-22883166&nbsp;</td>
                </tr>
                <tr>
                  <td>
                    Fax</td>
                  <td>020-22883266&nbsp;</td>
                </tr>
                <tr>
                  <td>Web address</td>
                  <td><a href='http://www.dmx-audio.com'>http://www.dmx-audio.com</a></td>
                </tr>
                <tr>
                  <td>address</td>
                  <td>
                    Room 706-709, Tower 2, Tian An Science Park Industrial Building, No.
                    555 Panyu Avenue North, Panyu District, Guangzhou City</td>
                </tr>
              </tbody>
            </table>
            <div className={classes.mapGoogle}>
              <MapGoogle
                googleMapURL={googleMapURL}
                defaultCenter={defaultCenter}
                position={position}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ContactUs.propTypes = {
}

export default ContactUs
