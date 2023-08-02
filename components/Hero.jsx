import { Hero as CaascontHero } from 'ccg-caascont';

export const Hero = (props) => {
  const { id, img = {}, ...restProps } = props;
  const { src, alt } = img;
  return (
    <div data-sb-object-id={id}>
      <CaascontHero
        img={src}
        imgAltText={alt}
        {...restProps}
        className="benefit-hero"
        sbDataAttr={{ heading: 'heading', body: 'body' }}
      />
    </div>
  );
};
