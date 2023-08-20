import { ThreeColumnCard as CAASCOntThreeColumnCard } from 'ccgx-caascont';

export const ThreeColumnCard = (props) => {
  const { background } = props;

  return (
    <div data-sb-object-id={props.id}>
      <CAASCOntThreeColumnCard
        {...props}
        containerStyle={`custom-threeColumnCard py-8 ${background ? 'bg-neutral-100' : ''}`}
        gridStyle="gap-5 justify-center"
        sbDataAttr={{
          title: 'title',
          subText: 'subText',
        }}
      />
    </div>
  );
};
