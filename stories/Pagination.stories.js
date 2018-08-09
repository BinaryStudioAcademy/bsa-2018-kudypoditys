import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Pagination } from '../src/client/components/pagination-component';

storiesOf('Pagination Component', module)
    .add('Pagination with empty pagesCount prop', () => <Pagination paginationChanged={action('Changed')} />)
    .add('Pagination with 100 pagesCount prop', () => <Pagination pagesCount={100} paginationChanged={action('Changed')} />)