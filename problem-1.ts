const describeValue = (value: any): string => {
    const type = typeof value;
    const truthyOrFalsy = value ? "truthy" : "falsy";

    return `${type} | ${truthyOrFalsy}`;
};

