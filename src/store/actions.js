export const fetchAll = ({dispatch}) => {
    dispatch('fetchTotalFund')
    dispatch('fetchTotalBacker')
    dispatch('fetchTwitter')
    dispatch('fetchFacebook')
    dispatch('fetchIndiegogo')
}