export const MOCK_STDOUT = ['Simulation Results'];
export const MOCK_STDERR = ['Simulation Results'];
export const MOCK_PATH = 'user';
export const MOCK_USER = 'You';

export const MOCK_WORKFLOW = `digraph mygraph {
    fontname="Helvetica,Arial,sans-serif"
    node [fontname="Helvetica,Arial,sans-serif"]
    edge [fontname="Helvetica,Arial,sans-serif"]
    node [shape=box];
    "//absl/random:random"
    "//absl/random:random" -> "//absl/random:distributions"
    "//absl/random:random" -> "//absl/random:seed_sequences"
    "//absl/random:random" -> "//absl/random/internal:pool_urbg"
    "//absl/random:random" -> "//absl/random/internal:nonsecure_base"
    "//absl/random:distributions"
    "//absl/random:distributions" -> "//absl/strings:strings"
    "//absl/random:seed_sequences"
    "//absl/random:seed_sequences" -> "//absl/random/internal:seed_material"
    "//absl/random:seed_sequences" -> "//absl/random/internal:salted_seed_seq"
    "//absl/random:seed_sequences" -> "//absl/random/internal:pool_urbg"
    "//absl/random:seed_sequences" -> "//absl/random/internal:nonsecure_base"
    "//absl/random/internal:nonsecure_base"
    "//absl/random/internal:nonsecure_base" -> "//absl/random/internal:pool_urbg"
    "//absl/random/internal:nonsecure_base" -> "//absl/random/internal:salted_seed_seq"
    "//absl/random/internal:nonsecure_base" -> "//absl/random/internal:seed_material"
    "//absl/random/internal:pool_urbg"
    "//absl/random/internal:pool_urbg" -> "//absl/random/internal:seed_material"
    "//absl/random/internal:salted_seed_seq"
    "//absl/random/internal:salted_seed_seq" -> "//absl/random/internal:seed_material"
    "//absl/random/internal:seed_material"
    "//absl/random/internal:seed_material" -> "//absl/strings:strings"
    "//absl/strings:strings"
  }`;
