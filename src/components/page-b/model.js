export default {
    name: 'modelb',

    data: {
        counts: 10,
        pageaNum: null,
    },
    
    syncs: {
        inc() {
            this.counts--;
        },
    },
};
