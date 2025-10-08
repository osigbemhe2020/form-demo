// ✅ screen order to determine what's next
'use client';
import Link from 'next/link';
import useScreenStore from '@/store/firstStore';

const screenOrder = [
  'My Details',
  'About me',
  'Services you can provide',
  'Portfolio',
  'Get Paid',
];

type buttonprops = {
  value: string;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
};

type ButtonCaseProps = {
  prevScreen: string;
  inner: string;
  setPrevScreen: (activeKey: string) => void;
  setInner: (inner: string) => void;
  setShowModal: (showModal: boolean) => void;
};

const BlueBtn = ({ onClick, value }: buttonprops) => (
  <input
    type="submit"
    value={value}
    className="mt-8 h-12 w-full bg-blue-600 text-white font-medium rounded"
    onClick={onClick}
  />
);

const WhiteBtn = ({ onClick, value }: buttonprops) => (
  <input
    type="submit"
    value={value}
    className="mt-8 h-12 w-full bg-blue-white border-[blue] border-[1px] font-medium rounded"
    onClick={onClick}
  />
);

const ButtonCase = ({ prevScreen, setPrevScreen, inner, setInner, setShowModal }: ButtonCaseProps) => {
  // ✅ Pull state & actions directly from Zustand
  const { screen, setScreenAndKey } = useScreenStore();

  const getNextScreen = (current: string, prev: string) => {
    if (current === 'Add Portfolio' && prev) {
      const index = screenOrder.indexOf(prev);
      return index < screenOrder.length - 1 ? screenOrder[index + 1] : prev;
    }
    const index = screenOrder.indexOf(current);
    return index < screenOrder.length - 1 ? screenOrder[index + 1] : current;
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const next = getNextScreen(screen, prevScreen);
    setScreenAndKey(next);
  };

  const addPhoto = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPrevScreen(screen); // keep track of where we branched from
    setScreenAndKey('Add Portfolio', 'Portfolio');
  };

  const cancel = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setScreenAndKey('Get Paid');
    setInner('one');
  };

  const viewTransaction = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setScreenAndKey('Transaction history', 'Get Paid');
  };

  const upload = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setScreenAndKey('Get Paid');
  };

  const gotopayrequest = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInner('one');
    setScreenAndKey('Payment Request', 'Get Paid');
  };

  const gotoproject = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setScreenAndKey('Project Preference');
  };

  const back = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInner('two');
  };

  const popup = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
  <div>
    <div className="flex gap-[10px]">
      {screen === 'Portfolio' && (
        <WhiteBtn value="Add Photos" onClick={addPhoto} />
      )}
      {screen === 'Add Portfolio' && (
        <WhiteBtn value="Upload" onClick={upload} />
      )}
      {screen === 'Payment Request' && (
        <WhiteBtn value="Cancel" onClick={cancel} />
      )}
      {screen === 'Help' && (
        <WhiteBtn value="Cancel" onClick={gotoproject} />
      )}
      {screen === 'Upload Id' && (
        <WhiteBtn value="Cancel" onClick={gotoproject} />
      )}

      {screenOrder.includes(screen) &&
        screen !== screenOrder[screenOrder.length - 1] && (
          <BlueBtn value="Continue" onClick={handleClick} />
        )}

      {screen === 'Get Paid' && (
        <BlueBtn value="View Transaction" onClick={viewTransaction} />
      )}
      {screen === 'Transaction history' && (
        <BlueBtn value="Download Report" onClick={gotoproject} />
      )}
      {screen === 'Payment Request' && (
        <BlueBtn value="Request Payments" onClick={gotoproject} />
      )}
      {screen === 'Project Preference' && (
        <Link href="/review-page" className="w-full">
          <BlueBtn value="Continue" onClick={() => {}} />
        </Link>
      )}
      {screen === 'Help' && (
        <BlueBtn value="Submit" onClick={popup} />
      )}
      {screen === 'Upload Id' && (
        <BlueBtn value="Upload" onClick={popup} />
      )}
      {inner === 'two' && (
        <BlueBtn value="Continue Withdrawl" onClick={gotopayrequest} />
      )}
      {inner === 'three' && (
        <BlueBtn value="Back" onClick={back} />
      )}
      </div>
      <p style={{textAlign:'center',fontStyle:'italic'}}>All the buttons work</p>
    </div>
  );
};

export default ButtonCase;
