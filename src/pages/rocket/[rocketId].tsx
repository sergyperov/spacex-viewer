import { useRouter } from 'next/router'
import RocketInfoContainer from '@containers/RocketInfoContainer/RocketInfoContainer'
import { storeWrapper } from '@store/store'
/**
 * Homepage
 */
const RocketPage: React.FC = () => {
  const router = useRouter()
  return (
    <main>
      <RocketInfoContainer rocketId={router.query.rocketId as string} />
    </main>
  )
}

export const getServerSideProps = storeWrapper.getServerSideProps(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async () => {}
)

export default RocketPage
