import {
    createLocalizedPathnamesNavigation,
} from 'next-intl/navigation';

export const defaultLocale = 'zh';

export const locales = ['en', 'zh'];

export const localObject = {
    en: 'English',
    zh: '中文'
};

export const pathnames = {
    '/': '/',
};

export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        pathnames
    });
