import React from 'react'
import { UList } from '../components/parts/text/index'

export default {
    title: 'Unordered List',
    component: UList
}

const items = ['one', 'two', 'three', 'four']

export const UnorderLists = () => <UList items={items}/>