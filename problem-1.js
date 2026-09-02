// Problem-1

const describeValue = (value) => {
    const type = typeof value;
    const truthyOrFalsy = value ? "truthy" : "falsy";

    return `${type} | ${truthyOrFalsy}`;
};

