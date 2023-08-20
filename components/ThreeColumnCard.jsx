import { ThreeColumnCard as CAASCOntThreeColumnCard } from 'ccgx-caascont';

export const ThreeColumnCard = (props) => {
  const { containerStyle } = props;

  return (
    <div className="md:container mx-auto" data-sb-object-id={props.id}>
      <CAASCOntThreeColumnCard
        {...props}
        containerStyle={`py-8 ${containerStyle || ''}`}
        gridStyle="gap-5 justify-center"
        sbDataAttr={{
          title: 'title',
          subText: 'subText',
        }}
      />
    </div>
  );
};
