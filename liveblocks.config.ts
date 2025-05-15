import {
  createClient,
  LiveList,
  LiveMap,
  LiveObject,
} from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import type { Layer, Color } from "@/types/canvas";

const client = createClient({
  publicApiKey:
    "pk_dev_YGks83Kt7WUjZ4z6b-ZoAvPCnCInvG9kxQSyYlzO3PXYDaNzaIC72UPbsXZWeNhc",
  async resolveUsers({ userIds }) {
    // Example: Simulate user resolution logic.
    return userIds.map((userId) => ({
      id: userId,
      name: `User ${userId}`, // Placeholder name
      avatar: `/avatars/${userId}.png`, // Placeholder avatar
    }));
  },
  async resolveMentionSuggestions({ text, roomId }) {
    // Example: Simulate mention suggestions logic.
    const mockUserIds = [
      "john@example.com",
      "jane@example.com",
      "joanna@example.com",
    ];
    if (!text) {
      return mockUserIds;
    }
    return mockUserIds.filter((userId) =>
      userId.toLowerCase().includes(text.toLowerCase()),
    );
  },
});

// Presence represents the properties that exist on every user in the Room
type Presence = {
  cursor: { x: number; y: number } | null;
  selection: string[];
  pencilDraft: [x: number, y: number, pressure: number][] | null;
  pencilColor: Color | null;
};

// Storage represents the shared document that persists in the Room
type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};

// UserMeta represents static metadata on each user
type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    picture?: string;
  };
};

// RoomEvent represents the type of custom events broadcast in the Room
type RoomEvent = {};

// ThreadMetadata represents metadata on each thread (used for comments)
export type ThreadMetadata = {};

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useUser,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client,
);
