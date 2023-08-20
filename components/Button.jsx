import { Button as CaascontButton } from 'ccgx-caascont';

export const Button = (props) => {
  const { label, id } = props;
  return (
    <div data-sb-object-id={id}>
      <CaascontButton {...props} label={label} sbDataAttr={{ label: 'label' }} />
    </div>
  );
};
