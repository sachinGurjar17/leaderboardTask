import LeaderBoard from './Leaderboard'
import AddUserform from './AddUserform'
import History from './History'

function Layout() {

  return (
      <div className='flex flex-row justify-center'>
        <LeaderBoard/>
        <AddUserform/>
      </div>
  )
}

export default Layout