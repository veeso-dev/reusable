import { useTranslations } from 'next-intl';
import * as React from 'react';

interface Props {
  id: string;
}

const RichTextFormattedMessage = (props: Props) => {
  const t = useTranslations();

  return <span>{t(props.id)}</span>;
};

export default RichTextFormattedMessage;
