import { Button as CaascontButton } from 'ccg-caascont';

export const Button = (props) => {
  const { label, id } = props;
  return (
    <div data-sb-object-id={id}>
      <CaascontButton label={label} sbDataAttr={{ label: 'label' }} />
    </div>
  );
};
