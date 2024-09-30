const classnames = (...classes: (string | null | undefined | boolean)[]) => `${classes.filter(className => className).join(' ')}`;

export default classnames;