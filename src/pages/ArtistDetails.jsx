import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistSummaryQuery } from "../redux/services/shazam";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // const { data: artistData, isFetching: isFetchingArtistDetails } =
  //   useGetArtistDetailQuery(artistId);
  // console.log("artistData ::", artistData.data[0]);

  const {
    data,
    isFetching: isFetchingArtistSummary,
    error,
  } = useGetArtistSummaryQuery(artistId);

  if (isFetchingArtistSummary)
    return <Loader title="Searching artist details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={data?.resources} />

      <RelatedSongs
        data={Object.values(data?.resources.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
