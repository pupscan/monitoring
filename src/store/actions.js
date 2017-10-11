export const fetchAll = ({dispatch}) => {
    dispatch('fetchTotalFund')
    dispatch('fetchTotalFundMonth')
    dispatch('fetchTotalBacker')
    dispatch('fetchTwitter')
    dispatch('fetchFacebook')
    dispatch('fetchIndiegogo')
    dispatch('fetchKisskissbankbank')
    dispatch('fetchGitlab')
    dispatch('fetchStripe')
    dispatch('fetchMotion')
}