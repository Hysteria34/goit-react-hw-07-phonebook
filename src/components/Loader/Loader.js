import { BallTriangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <BallTriangle
        ariaLabel="loading"
        height={50}
        width={50}
        strokeWidth={3}
        color="pink"
        secondaryColor="red"
      />
    </div>
  );
}
