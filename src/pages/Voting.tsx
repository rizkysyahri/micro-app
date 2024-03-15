import Navbar from '../components/navbar/Navbar'
import VotingPage from '../components/VotingPage'
import initialVotingData from '../mocks/types.json'

export default function Voting() {
  return (
    <>
        <Navbar />
        <VotingPage initialVoting={initialVotingData}/>
    </>
  )
}
