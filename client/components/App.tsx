import { useQuery } from '@tanstack/react-query'
import { getNasaImages } from '../apis/nasa'


function App() {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['nasa'],
    queryFn: () => getNasaImages(),
  })
  if (isError) {
    console.log(error)
    return <p>Something went wrong</p>
  }

  if (isLoading) {
    return (
      <p>
        Loading ...
      </p>
    )
  }


  // const DummyImage = <img src="https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg" alt="dummy img" />

  return (
    <div className='nasa-image-container'>
      <h1>NASA Image Of The Day</h1>
      <img src={data?.hdurl} alt="Nasa" />
      {/* {DummyImage} */}
    </div>
  )
}

export default App
