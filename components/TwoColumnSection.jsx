import { TwoColumnSection as CAASCOntTwoColumnSection } from 'ccgx-caascont';

export const TwoColumnSection = (props) => {
  return (
    <div className="py-10 my-10 relative" data-sb-object-id={props.id}>
      <CAASCOntTwoColumnSection {...props} containerStyle="custom-twoColumnSection" />
    </div>
  );
};
