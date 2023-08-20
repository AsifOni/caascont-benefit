import { TwoColumnSection as CAASCOntTwoColumnSection } from 'ccgx-caascont';
import { Button } from './Button';

export const TwoColumnSection = (props) => {
  const { buttonData = {} } = props.cardData || {};
  const isButtonExist = Object.keys(buttonData).length > 0;

  return (
    <div className="md:container mx-auto my-8 relative" data-sb-object-id={props.id}>
      <CAASCOntTwoColumnSection {...props} containerStyle="justify-center" />
      {isButtonExist && (
        <div className="flex absolute top-[75%] left-[53%]">
          <Button {...buttonData} />
        </div>
      )}
    </div>
  );
};
