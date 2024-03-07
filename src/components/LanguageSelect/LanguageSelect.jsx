'use client';

import React from 'react'
import Select from 'react-select'
import flagFrench from '@/public/dashboard/header-icons/flags/fr.svg'
import flagPolish from '@/public/dashboard/header-icons/flags/pl.svg'
import flagEnglish from '@/public/dashboard/header-icons/flags/gb.svg'
import HeaderButton from '../HeaderButton/HeaderButton'
import Image from 'next/image';

const LanguageSelect = () => {
    const languageOptions = [
        {
            value: 'English', label: <div>
                <Image
                    src={flagEnglish}
                    alt="flagEnglish"
                    height="30"
                    width="30" />
            </div>
        },
        {
            value: 'French', label: <div><Image
                src={flagFrench} alt="FlagFrench" height="30" width="30" /></div>
        },
        {
            value: 'Polish', label: <div><Image
                src={flagPolish} alt="FlagPolish" height="30" width="30" /></div>
        }
    ]
    {/* <div className="flex w-[40px] h-[40px] rounded-full shadow-lg items-center justify-center cursor-pointer"> */ }

    return (
        <div>

            <Select options={languageOptions} styles={{
                control: (styles) => ({
                    ...styles, border: 'none', borderRadius: '100%',
                    width: '40px', height: '40px', cursor: 'pointer',
                    alignItems: 'center', display: 'flex', justifyContent: 'center',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                }),
                placeholder: (base, state) => {
                    return {
                        ...base,
                        display: 'none',
                    };
                }
            }}
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            />
        </div>
    )
}

export default LanguageSelect