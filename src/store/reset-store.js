import { useTradesStore } from "./trades";
import { useWatchlistStore } from "./watchlist";
import { useDatabaseStore } from "./database";
import { useNotificationStore } from "./notifications";
import { useUserStore } from "./user";

// Store would save previous state data even with user change
// this resets any data from previous store mount
export const resetStore = () => {
  useTradesStore().$reset();
  useWatchlistStore().$reset();
  useDatabaseStore().$reset();
  useNotificationStore().$reset();
  useUserStore().$reset();
};
