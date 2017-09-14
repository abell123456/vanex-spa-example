export default {
    name: 'modela',

    data: {
        counts: 0,
    },
    
    syncs: {
        inc() {
            this.counts++;
        },
    },
};
