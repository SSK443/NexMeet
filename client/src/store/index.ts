import { create } from "zustand";
import Peer from "simple-peer";

interface PeerData {
  id: string;
  peer: Peer.Instance;
  stream: MediaStream;
  name: string;
  isScreen?: boolean;
}

interface Message {
  userName: string;
  message: string;
}

interface Poll {
  id: string;
  question: string;
  options: { text: string; votes: number }[];
}

interface Store {
  stream: MediaStream | null;
  setStream: (stream: MediaStream | null) => void;
  name: string;
  setName: (name: string) => void;
  roomId: string;
  setRoomId: (roomId: string) => void;
  peers: PeerData[];
  addPeer: (peer: PeerData) => void;
  removePeer: (id: string) => void;
  participantCount: number;
  setParticipantCount: (count: number) => void;
  audio: boolean;
  video: boolean;
  toggleAudio: () => void;
  toggleVideo: () => void;
  messages: Message[];
  addMessage: (message: Message) => void;
  polls: Poll[];
  addPoll: (poll: Poll) => void;
  votePoll: (pollId: string, optionIndex: number) => void;
  notes: string;
  setNotes: (notes: string) => void;
  sentiment: number;
  setSentiment: (sentiment: number) => void;
  screenSharerId: string | null;
  setScreenSharerId: (id: string | null) => void;
  whiteboardData: string | null;
  setWhiteboardData: (data: string | null) => void;
}

export const useStore = create<Store>((set, get) => ({
  stream: null,
  setStream: (stream) => set({ stream }),
  name: "",
  setName: (name) => set({ name }),
  roomId: "",
  setRoomId: (roomId) => set({ roomId }),
  peers: [],
  addPeer: (peer) =>
    set((state) => ({
      peers: [...state.peers.filter((p) => p.id !== peer.id), peer],
    })),
  removePeer: (id) =>
    set((state) => ({ peers: state.peers.filter((p) => p.id !== id) })),
  participantCount: 1,
  setParticipantCount: (count) => set({ participantCount: count }),
  audio: true,
  video: true,
  toggleAudio: () =>
    set((state) => {
      state.stream
        ?.getAudioTracks()
        .forEach((track) => (track.enabled = !state.audio));
      return { audio: !state.audio };
    }),
  toggleVideo: () =>
    set((state) => {
      state.stream
        ?.getVideoTracks()
        .forEach((track) => (track.enabled = !state.video));
      return { video: !state.video };
    }),
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  polls: [],
  addPoll: (poll) => set((state) => ({ polls: [...state.polls, poll] })),
  votePoll: (pollId, optionIndex) =>
    set((state) => ({
      polls: state.polls.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              options: poll.options.map((opt, i) =>
                i === optionIndex ? { ...opt, votes: opt.votes + 1 } : opt
              ),
            }
          : poll
      ),
    })),
  notes: "",
  setNotes: (notes) => set({ notes }),
  sentiment: 0,
  setSentiment: (sentiment) => set({ sentiment }),
  screenSharerId: null,
  setScreenSharerId: (id) => set({ screenSharerId: id }),
  whiteboardData: null,
  setWhiteboardData: (data) => set({ whiteboardData: data }),
}));
