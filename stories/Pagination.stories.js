import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PaginationComponent } from '../src/client/components/pagination-component';

storiesOf('Pagination Component', module)
    .add('Pagination with empty pagesCount prop', () => <PaginationComponent paginationChanged={action('Changed')} />)
    .add('Pagination with 100 pagesCount prop', () => <PaginationComponent pagesCount={100} paginationChanged={action('Changed')} />)