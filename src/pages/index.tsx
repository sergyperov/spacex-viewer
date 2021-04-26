import {
  loadRockets,
  RocketsThunkDispatch,
} from '@store/rockets/rocketsReducer'
import { AppState } from '@store/store'
import { connect } from 'react-redux'
import {
  HomePageContainer,
  IHomePageContainerProps,
} from '@containers/HomePageContainer/HomePageContainer'

// Homepage
const HomePage: React.FC<IHomePageContainerProps> = (props) => {
  return (
    <main>
      <HomePageContainer {...props} />
    </main>
  )
}

const mapStateToProps = ({ rockets }: AppState) => ({
  rocketIds: rockets.data.result,
  loadingStatus: rockets.loadingStatus,
})

const mapDispatchToProps = (dispatch: RocketsThunkDispatch) => ({
  loadRockets: () => dispatch(loadRockets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
