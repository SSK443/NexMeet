import { create } from "zustand";
import Peer from "simple-peer";

interface PeerData {
  id: string;
  peer: Peer.Instance;
  stream: MediaStream;
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
}

export const useStore = create<Store>((set) => ({
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
}));
