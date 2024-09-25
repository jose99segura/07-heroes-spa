

import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ( { publisher } ) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] );

  return (
    <div className='rows rows-cols-1 rows-cols-md-3 g-3'>
        {
            heroes.map( hero => (
                <div key={ hero.id }>
                    <HeroCard key={ hero.id } { ...hero } />
                </div>
            ))
        }
    </div>
  )
}
