import { connect } from 'react-redux'
import Introduction from '../components/Introduction'
import { initProfiles, getProfilesDetail } from '../modules/About'

export const mapStateToProps = (store) => ({
  lsProfiles: store.about.lsProfiles,
  profile: store.about.profile,
})

export const mapDispatchToProps = {
  getProfilesDetail,
  initProfiles,
}

export default connect(mapStateToProps, mapDispatchToProps)(Introduction)
